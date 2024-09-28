import { Card } from "@/components";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <Card>
      <ExclamationTriangleIcon />
      <h2 className="text-center">Not Found</h2>
      <p>Could not find requested page.</p>
    </Card>
  );
}
