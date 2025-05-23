import seedrandom from 'seedrandom';

export class RandomUtils {
   private static random?: seedrandom.PRNG;

   public static registerSeed(seed: string): void {
      this.random = seedrandom(seed);
   }

   public static between(min: number, max: number): number {
      if (!this.random) {
         throw new Error('Random seed not registered!');
      }

      return this.random() * (max - min) + min;
   }

   public static nextIntRange(min: number, max: number): number {
      return Math.floor(this.between(min, max));
   }

   public static nextInt(max: number): number {
      return this.nextIntRange(0, max);
   }

   public static nextArrayElement<T>(array: readonly T[]): T {
      return array[this.nextInt(array.length)];
   }

   public static nextNArrayElements<T>(array: readonly T[], n: number): T[] {
      if (array.length < n) {
         throw new Error('Not enough elements in array to get N elements!');
      }
      if (array.length === n) {
         return [...array];
      }

      const elements: T[] = [];
      const possibleElements = [...array];

      while (elements.length < n) {
         const newElement = this.nextArrayElement(possibleElements);
         possibleElements.remove(newElement);
         elements.push(newElement);
      }

      return elements;
   }

   public static nextChance(chance = 0.5): boolean {
      if (!this.random) {
         throw new Error('Random seed not registered!');
      }

      return this.random() < chance;
   }
}
