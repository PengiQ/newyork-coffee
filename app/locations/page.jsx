import { InnerPageFrame } from "@/components/site-shell";
import LocationsView from "./view";

export const metadata = {
  title: "Locations | New York Coffee Pakistan",
  description: "Find New York Coffee branches in Karachi and Lahore, with unconfirmed Islamabad listings clearly noted.",
};

export default function LocationsPage() {
  return (
    <InnerPageFrame>
      <LocationsView />
    </InnerPageFrame>
  );
}
