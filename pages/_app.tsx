import { FC, useEffect } from "react";
import Link from "next/link";
import { AppProps } from "next/app";
import { Provider as EffectorProvider } from "effector-react/ssr";

import "../styles/globals.css";

import { useScope } from "../models/use-scope";
import { app } from "../models/domain";
import "../models/init";
import { EFFECTOR_SSR_DATA_PROP_NAME } from "../models/add-effector-preload-data";

const Application: FC<AppProps> = ({ Component, pageProps }) => {
  const scope = useScope(app, pageProps[EFFECTOR_SSR_DATA_PROP_NAME]);

  useEffect(() => {
    console.log(scope);
  }, []);

  return (
    <EffectorProvider value={scope}>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/todos">
          <a>Todos</a>
        </Link>
      </nav>
      <Component {...pageProps} />
    </EffectorProvider>
  );
};

export default Application;
