import React from "react";
import type { PropsWithChildren } from "react";
import Sidebar from "@/components/layout/Sidebar/Sidebar";
import styles from "./Layout.module.scss";

const LayoutClient = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <main className={styles.layout}>
      <Sidebar />
      <section>{children}</section>
    </main>
  );
};

export default LayoutClient;
