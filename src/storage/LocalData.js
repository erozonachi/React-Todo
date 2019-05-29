class LocalData {
  static saveData(data) {
    localStorage.setItem('todoList', JSON.stringify(data));
  }

  static fetchData() {
    return JSON.parse(localStorage.getItem('todoList'));
  }

}

export default LocalData;
