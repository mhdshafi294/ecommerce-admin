import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <div className="p-4">
        <Button size="default" variant="destructive">
          Click Me
        </Button>
      </div>
    </div>
  );
}
