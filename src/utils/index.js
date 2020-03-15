export function extractColor(props, color) {
  return props.theme.colors[color];
}

export function textSlice(str, length = 30) {
  return `${str.substring(0, length).trim()}...`;
}
