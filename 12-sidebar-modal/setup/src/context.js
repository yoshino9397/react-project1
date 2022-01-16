import React, { useState, useContext } from "react";
///useContextをインポート

const AppContext = React.createContext();
///①親コンポーネントから子コンポーネントにデータを渡す処理propsを使わずにできるので煩雑さが減る

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
    ///②.providerのタグで囲むのは必須。これで親コンポーネントの設定完了
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
///作成したUserCountをexportしているのは,Contextを利用するComponentでimportを行うため

export { AppContext, AppProvider };

///https://reffect.co.jp/react/react-usecontext-understanding#useContext
