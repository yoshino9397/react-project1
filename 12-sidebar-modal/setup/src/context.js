import React, { useState, useContext } from "react";
///useContextをインポート

const AppContext = React.createContext()
///①親コンポーネントから子コンポーネントにデータを渡す処理propsを使わずにできるので煩雑さが減る

const AppProvider=()=>{

return(
<AppContext.Provider value={{}}>

</AppContext.Provider>
///②.providerのタグで囲むのは必須。これで親コンポーネントの設定完了



)

}

///https://reffect.co.jp/react/react-usecontext-understanding#useContext





















export const useGlobalContext = () => {
  return useContext(AppContext);
};
///作成したUserCountをexportしているのはContextを利用するComponentCでimportを行うため