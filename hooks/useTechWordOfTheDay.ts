"use client";

import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { TechWordOfTheDay } from "@/types/techwordoftheday";

export function useTechWordOfTheDay() {
  const [techWordOfTheDay, setTechWordOfTheDay] =
    useState<TechWordOfTheDay | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchWordOfTheDay() {
      try {
        const querySnapshot = await getDocs(collection(db, "it-wordbook"));
        const words: TechWordOfTheDay[] = [];

        querySnapshot.forEach((document) => {
          const techbookData = document.data();
          for (const key in techbookData) {
            words.push({
              id: document.id + "-" + key,
              word: techbookData[key].word,
              definition: techbookData[key].definition,
              tags: techbookData[key].tags,
            });
          }
        });

        if (words.length > 0) {
          const today = new Date();
          const dateString = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
          const seed = dateString
            .split("")
            .reduce((acc, char) => acc + char.charCodeAt(0), 0);
          const index = seed % words.length;

          setTechWordOfTheDay(words[index]);
        } else {
          setError("No tech words found in the database");
        }
      } catch (error) {
        console.error("Error fetching word of the day:", error);
        setError("Failed to fetch word of the day");
      } finally {
        setLoading(false);
      }
    }

    fetchWordOfTheDay();
  }, []);

  return { techWordOfTheDay, loading, error };
}
