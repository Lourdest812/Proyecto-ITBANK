import HomeSection from "./HomeSection";
import AccountsSection from "./AccountsSection";
import TransfersSection from "./TransfersSection";
import PaymentsSection from "./PaymentsSection";
import LoansSection from "./LoansSection";
import DollarsSection from "./DollarsSection";

function MainSection({ selectedSection }) {
  let sectionComponent;

  switch (selectedSection) {
    case "Inicio":
      sectionComponent = <HomeSection />;
      break;
    case "Cuentas":
      sectionComponent = <AccountsSection />;
      break;
    case "Transferencias":
      sectionComponent = <TransfersSection />;
      break;
    case "Pagos":
      sectionComponent = <PaymentsSection />;
      break;
    case "Prestamos":
      sectionComponent = <LoansSection />;
      break;
    case "Compra y venta de dolares":
      sectionComponent = <DollarsSection />;
      break;
    default:
      sectionComponent = <HomeSection />;
      break;
  }

  return <div>{sectionComponent}</div>;
}

export default MainSection;
