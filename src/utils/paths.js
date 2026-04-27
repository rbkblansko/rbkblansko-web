export function getPath(path) {
  let base = import.meta.env.BASE_URL || '';
  if (base === '/') base = '';
  base = base.replace(/\/$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}
