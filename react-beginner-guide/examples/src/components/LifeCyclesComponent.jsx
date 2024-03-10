import React, { Component } from 'react';

class LifeCyclesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  // componentDidMount kullanımı
  componentDidMount() {
    console.log('Component did mount');
    // Bileşen ilk kez DOM'a yerleştirildiğinde çalışacak kodlar buraya yazılır
    // Genellikle veri yükleme veya başlangıç ayarları için kullanılır
  }

  // componentDidUpdate kullanımı
  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update');
    // Bileşen güncellendiğinde çalışacak kodlar buraya yazılır
    // Önceki ve yeni props/durumları karşılaştırarak özel işlemler gerçekleştirilebilir
  }

  // componentWillUnmount kullanımı
  componentWillUnmount() {
    console.log('Component will unmount');
    // Bileşen DOM'dan kaldırılmadan önce çalışacak kodlar buraya yazılır
    // Genellikle abonelikleri iptal etme veya temizlik işlemleri için kullanılır
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increase Count
        </button>
      </div>
    );
  }
}

export default LifeCyclesComponent;