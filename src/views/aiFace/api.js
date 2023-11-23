export const queryFace = () => {
  return Promise.resolve({
    status: 200,
    message: 'ok',
    data: {
      imageInfo: {
        url: 'https://xxxx/image.jpg',
        width: 800,
        height: 500
      },
      // ⼈脸框的信息
      faceInfo: [
        { id: 1, label: '人脸1', x: 100, y: 100, width: 80, height: 100 },
        { id: 2, label: '人脸2', x: 200, y: 100, width: 80, height: 100 },
        { id: 3, label: '人脸3', x: 300, y: 150, width: 80, height: 100 },
        { id: 4, label: '人脸4', x: 250, y: 300, width: 80, height: 100 },
        { id: 5, label: '人脸5', x: 500, y: 300, width: 80, height: 100 }
      ]
    }
  })
}
