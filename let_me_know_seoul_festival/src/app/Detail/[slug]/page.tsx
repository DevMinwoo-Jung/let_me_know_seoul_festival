'use client'
import { useParams } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};


export default function DetailPage() {
    const { slug } = useParams();

    return (
        <div>
            <h1>Detail Page for {slug}</h1>
        </div>
    );
}