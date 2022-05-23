let $global = null;
$global =
  typeof global !== 'undefined'
    ? global
    : typeof window !== 'undefined'
      ? window
      : {};

if (!$global) throw new Error('Global object not found.');

$global.__holmesObservableMap = new Map();

export function getGlobalContext() {
  return $global.__holmesObservableMap;
}

export function getObservable(key) {
  if (!$global.__holmesObservableMap.has(key)) {
    return null;
  }
  return $global.__holmesObservableMap.get(key);
}
