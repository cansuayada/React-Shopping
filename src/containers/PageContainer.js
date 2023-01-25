import React from "react";

const PageContainer = ({ children }) => {
  /*
    genel bir yapı oluşturarak sayfaları içine alıyor ve hepsine tek tek özellik vermektense
    bu yapı ile hepsini kontrol ediyoruz
    */
  return <div className="w-3/4 m-auto">{children}</div>;
};

export default PageContainer;
