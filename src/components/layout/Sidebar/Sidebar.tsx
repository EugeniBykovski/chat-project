"use client";

import React from "react";
import { Sun } from "lucide-react";
import Image from "next/image";
import styles from "@/components/layout/Sidebar/Sidebar.module.scss";
import Link from "next/link";
import { menu } from "@/constants/mockData";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <Link href="/">
        <Image src="/nvm.svg" priority alt="logo" width={45} height={45} />
      </Link>

      <div>
        {menu.map(({ id, url, Icon }) => (
          <Link
            key={id}
            href={url}
            className={cn("", pathname === url && "text-yellow-400")}
          >
            <Icon size={22} />
          </Link>
        ))}
      </div>

      <Sun />
    </aside>
  );
};

export default Sidebar;
