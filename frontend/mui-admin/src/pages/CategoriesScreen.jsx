import { Home } from "@mui/icons-material";
import { BreadCrumbs } from "../components";

export const CategoriesScreen = () => {
  const breadCrumbs = [
    {
      label: "",
      to: "/",
      icon: <Home />,
    },
    {
      label: "Categories",
    },
  ];
  return (
    <>
      <BreadCrumbs items={breadCrumbs} />
    </>
  );
};
