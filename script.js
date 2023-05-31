document.addEventListener('DOMContentLoaded', () => {
  const board = document.getElementById('board');
  const cells = [];

  // ボードのセルを生成
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cells.push(cell);
      board.appendChild(cell);
    }
  }

  // ゲームの初期配置を設定
  cells[27].classList.add('piece', 'black');
  cells[28].classList.add('piece', 'white');
  cells[35].classList.add('piece', 'white');
  cells[36].classList.add('piece', 'black');
  
  // ピースを置く関数
  function placePiece(cell, color) {
    const piece = document.createElement('div');
    piece.classList.add('piece', color);
    cell.appendChild(piece);
  }

  // クリックイベントのハンドラ
  function handleCellClick(event) {
    const cell = event.target;
    // ピースを置く処理

    // 盤面の更新

    // ターンの切り替え

    // ゲームの終了判定

  }

  // セルにクリックイベントを追加
  cells.forEach((cell) => {
    cell.addEventListener('click', handleCellClick);
  });

  // リセットボタンのハンドラ
  const resetButton = document.getElementById('reset-btn');
  resetButton.addEventListener('click', () => {
    // ゲームをリセットする処理

  });

  // ゲームの初期化

});
