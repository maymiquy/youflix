import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import {
 Card,
 CardDescription,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";

export default function Home() {
 return (
  <>
   <PageHeader>
    <PageHeaderHeading>Home</PageHeaderHeading>
   </PageHeader>
   <Card>
    <CardHeader>
     <CardTitle>React + ShadcnUI Starter Kit</CardTitle>
     <CardDescription>
      Boilerplate for building Front-end apps with ShadcnUI.
     </CardDescription>
    </CardHeader>
   </Card>
  </>
 );
}
