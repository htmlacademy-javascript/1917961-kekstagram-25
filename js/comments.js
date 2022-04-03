import { checkArrayLength, removeAllChildren, movePointerToStart } from './util.js';
import { VIEW_COUNT_COMMENTS, COMMENTS_LOADER_ELEMENT } from './const.js';

const templateCommentElement = document.querySelector('#comment').content.querySelector('.social__comment');
const socialCommentsElement = document.querySelector('.social__comments');
const commentsCountViewElement = document.querySelector('.comments-count-view');

const fillCommentsCountView = (pictureDescription) => {
  commentsCountViewElement.textContent = String(pictureDescription.pointerViewComments);
  COMMENTS_LOADER_ELEMENT.classList.remove('hidden');
  if (pictureDescription.pointerViewComments === pictureDescription.comments.length) {
    COMMENTS_LOADER_ELEMENT.classList.add('hidden');
  }
};

const fillComment = (comment) => {
  const commentElement = templateCommentElement.cloneNode(true);
  const commentator = commentElement.querySelector('.social__picture');
  commentator.src = comment.avatar;
  commentator.alt = comment.name;
  commentElement.querySelector('.social__text').textContent = comment.message;
  return commentElement;
};

const fillCommentsView = (pictureDescription) => {
  const fragmentComments = document.createDocumentFragment();
  let pointer = pictureDescription.pointerViewComments + VIEW_COUNT_COMMENTS;
  if (checkArrayLength(pictureDescription.comments, pointer)) {
    pointer = pictureDescription.comments.length;
  }
  for (let i = pictureDescription.pointerViewComments; i < pointer; i++) {
    fragmentComments.appendChild(fillComment(pictureDescription.comments[i]));
  }
  pictureDescription.pointerViewComments = pointer;
  socialCommentsElement.appendChild(fragmentComments);
};

const onLoaderCommentsClick = (currentPictureDescription) => () => {
  fillCommentsView(currentPictureDescription);
  fillCommentsCountView(currentPictureDescription);
};

const outputComment = (pictureDescription) => {
  removeAllChildren(socialCommentsElement);
  movePointerToStart(pictureDescription);
  fillCommentsView(pictureDescription);
  fillCommentsCountView(pictureDescription);
  COMMENTS_LOADER_ELEMENT.addEventListener('click', onLoaderCommentsClick(pictureDescription));
};

export { outputComment, onLoaderCommentsClick };
