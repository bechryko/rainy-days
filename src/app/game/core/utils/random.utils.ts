import seedrandom from 'seedrandom';

export class RandomUtils {
   private static random?: seedrandom.PRNG;

   public static registerSeed(seed: string): void {
      this.random = seedrandom(seed);
   }

   public static nextInt(max: number): number {
      return this.nextIntRange(0, max);
   }

   public static nextIntRange(min: number, max: number): number {
      if(!this.random) {
         throw new Error("Random seed not registered!");
      }

      return Math.floor(this.random() * (max - min) + min);
   }

   public static nextArrayElement<T>(array: readonly T[]): T {
      return array[this.nextInt(array.length)];
   }

   public static nextChance(chance = 0.5): boolean {
      if(!this.random) {
         throw new Error("Random seed not registered!");
      }

      return this.random() < chance;
   }
}
