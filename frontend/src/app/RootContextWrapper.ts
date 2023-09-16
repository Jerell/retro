"use client";
import { ReactNode } from "react";

export default function RootContextWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
