import { Domain, fork, Scope, serialize } from "effector";
import { useMemo } from "react";

let scope: Scope;

function initializeScope(domain: Domain, ssrPreloadedData: any) {
  const clientData = scope ? serialize(scope, { onlyChanges: true }) : {};

  const _scope = fork(domain, {
    values: {
      ...clientData,
      ...ssrPreloadedData,
    },
  });

  if (typeof window !== "undefined") {
    scope = _scope;
  }

  if (!scope) scope = _scope;

  return _scope;
}

export function useScope(domain: Domain, ssrPreloadedData: any) {
  return useMemo(
    () => initializeScope(domain, ssrPreloadedData),
    [domain, ssrPreloadedData]
  );
}
