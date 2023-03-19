import { useNavigate } from "react-router-dom";
import { FontBodyBold } from "../shared/fonts";
import category from "../shared/store/category";
import { observer } from "mobx-react-lite";

export const CatalogNavigation = observer(() => {
  const navigation = useNavigate();
  function handleClick(id = 0) {
    navigation(`/catalog/${id}`);
  }

  let reverseNavigation = [...category.navigation].reverse(); // копируем массив и изменяем порядок элементов на обратный

  return (
    <div
      style={{
        gridColumn: "1 / -1",
        cursor: "pointer",
        alignSelf: "flex-start",
      }}
    >
      <FontBodyBold onClick={() => handleClick()} color="black">
        Каталог /
      </FontBodyBold>
      {reverseNavigation.map((nav, index, array) => {
        if (index != array.length - 1) {
          return (
            <FontBodyBold
              key={nav.id}
              onClick={() => handleClick(nav.id)}
              color="black"
            >
              {" "}
              {nav.name} /
            </FontBodyBold>
          );
        } else {
          return (
            <FontBodyBold key={nav.id} color="primary">
              {" "}
              {nav.name}
            </FontBodyBold>
          );
        }
      })}
    </div>
  );
});
