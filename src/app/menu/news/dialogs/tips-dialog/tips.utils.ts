export class TipsUtils {
   private static readonly questionTipsMap: Record<string, string[]> = {
      'I am struggling with getting high scores!': [
         "Don't insist on your current infrastructure! Swap the connection between your spawners and destinations, maybe you can create a simpler route between them!",
         "Pause the game at any time! You don't have to hurry, this isn't a realtime strategy game. Take your time!"
      ],
      'The cars are going in so unpredictable directions!': [
         'At every crossroad, the cars are trying to go in the rightmost direction: right to them, forward, left to them, and if none of these are available, they turn back.',
         'Spawners prefer rotating the newly spawned card upwards. If it is not available, they check every direction clockwise, and send the cars in that direction.',
         'It is always a good strategy to control the direction of the cars in crossroads with gates.'
      ],
      "My roads don't connect!": ['Try using the editor tool!'],
      "There are so many roads I can't manage!": [
         'Sometimes you can get rid of roads by connecting different spawners with different destinations.',
         'Sometimes you can merge two roads and separating them again using gates! But be careful, if they become the same color, they can only be separated using a timed gate!'
      ]
   };

   public static getQuestions(): string[] {
      return Object.keys(this.questionTipsMap);
   }

   public static getRandomAnswer(question: string, previousAnswer?: string): string {
      if (!(question in this.questionTipsMap)) {
         throw new Error('Invalid question: ' + question);
      }

      const possibleAnswers = [...this.questionTipsMap[question]];
      if (previousAnswer && possibleAnswers.includes(previousAnswer)) {
         possibleAnswers.splice(possibleAnswers.indexOf(previousAnswer), 1);
      }
      if (possibleAnswers.length === 0) {
         return previousAnswer!;
      }
      return possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];
   }
}
