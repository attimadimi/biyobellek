import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const [text, setText] = useState("");
  const [encoded, setEncoded] = useState("");

  const encodeWithMnemonics = (input: string) => {
    const keywords = input
      .split(" ")
      .map((word, i) => `(${i + 1}) ${word.toUpperCase().slice(0, 3)}`)
      .join(" - ");
    setEncoded(keywords);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-orange-100 to-green-100">
      <Card className="w-full max-w-md shadow-xl">
        <CardContent className="flex flex-col gap-4 p-6">
          <h1 className="text-2xl font-bold text-center text-green-700">Biyobellek</h1>
          <Input
            placeholder="Ezberlemek istediğin metni yaz..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button onClick={() => encodeWithMnemonics(text)} className="bg-orange-400 hover:bg-orange-500">
            Hafıza Kodu Üret
          </Button>
          {encoded && (
            <div className="p-4 bg-white rounded-xl border border-green-300">
              <p className="text-green-800 text-sm font-mono whitespace-pre-wrap">{encoded}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
