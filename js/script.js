function showImageDetails(imgElement) {
  // 获取图片的标题和参考文献
  const title = imgElement.getAttribute('data-title');
  const reference = imgElement.getAttribute('data-reference');
  
  // 获取当前点击图片所在的详情容器
  const detailsContainer = imgElement.nextElementSibling;  // 获取紧随图片后面的 .image-details 容器
  
  // 如果详情框已经显示，则隐藏它
  if (detailsContainer.style.display === 'block') {
    detailsContainer.style.display = 'none';  // 隐藏
  } else {
    // 否则显示并设置内容
    detailsContainer.innerHTML = `
      <h3>${title}</h3>
      <p><strong>Reference:</strong> ${reference}</p>
    `;
    detailsContainer.style.display = 'block';  // 显示
  }
}
