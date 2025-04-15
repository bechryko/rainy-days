export function toFraction(value: number): string {
   const rounded = Math.ceil(value * 10) / 10;
   const postfix = String(rounded).includes(".") ? "" : ".0";
   return rounded + postfix;
}
