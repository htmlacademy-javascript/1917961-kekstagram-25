const templateComment = document.querySelector('#comment').content.querySelector('.social__comment');

const fillComments = (insertPointComments, comments) => {
  const fragmentComments = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = templateComment.cloneNode(true);
    const commentator = commentElement.querySelector('.social__picture');
    commentator.src = comment.avatar;
    commentator.alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;
    fragmentComments.appendChild(commentElement);
  });
  insertPointComments.appendChild(fragmentComments);
};

export {fillComments};
