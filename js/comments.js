import { checkArrayLength, removeAllChildren, movePointerToStart } from './util.js';
import { VIEW_COUNT_COMMENTS, LOADER_COMMENTS } from './const.js';

const templateComment = document.querySelector('#comment').content.querySelector('.social__comment');
const socialComments = document.querySelector('.social__comments');
const commentsCountView = document.querySelector('.comments-count-view');

const fillCommentsCountView = (pictureDescription) => {
  commentsCountView.textContent = String(pictureDescription.pointerViewComments);
  LOADER_COMMENTS.classList.remove('hidden');
  if (pictureDescription.pointerViewComments === pictureDescription.comments.length) {
    LOADER_COMMENTS.classList.add('hidden');
  }
};

const fillComment = (comment) => {
  const commentElement = templateComment.cloneNode(true);
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
  socialComments.appendChild(fragmentComments);
};

let currentPictureDescription = '';

const onLoaderCommentsClick = () => {
  fillCommentsView(currentPictureDescription);
  fillCommentsCountView(currentPictureDescription);
};

const outputComment = (pictureDescription) => {
  removeAllChildren(socialComments);
  movePointerToStart(pictureDescription);
  fillCommentsView(pictureDescription);
  fillCommentsCountView(pictureDescription);
  currentPictureDescription = pictureDescription;
  LOADER_COMMENTS.addEventListener('click', onLoaderCommentsClick);
};

export {  outputComment, onLoaderCommentsClick };
