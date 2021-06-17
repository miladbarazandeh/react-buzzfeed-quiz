import ImageType from "../BuzzFeedQuiz/image.interface";

type AnswerType = ImageType & {
  /**
   * The text value of the answer choice.
   */
  answer: string;
  /**
   * Applies a given color to only the specific answer container's background.
   * This value supersedes the generalBackgroundColor prop if supplied to ReactBuzzFeedQuiz.
   * If the generalBackgroundColor prop is supplied and this value is empty, then the color in generalBackgroundColor will be applied.
   * Otherwise, if no color or invalid color is supplied, the default background color is black.
   */
  backgroundColor?: string;
  /**
   * Applies a given color to only the specific answer container's font.
   * This value supersedes the generalFontColor prop if supplied to ReactBuzzFeedQuiz.
   * If the generalFontColor prop is supplied and this value is empty, then the color in generalFontColor will be applied.
   * Otherwise, if no color or invalid color is supplied, the default font color is white.
   */
  fontColor?: string;
  /**
   * Function called when this specific answer option is selected.
   * This function value supersedes ReactBuzzFeedQuiz's onAnswerSelection prop, if supplied, for this specific answer choice.
   *
   * @returns void
   */
  onAnswerSelection?: () => void;
  /**
   * The numerical ID of the answer's associated result object found in ReactBuzzFeedQuiz's results prop.
   */
  resultID: number;
};

export default AnswerType;
