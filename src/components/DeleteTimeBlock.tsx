// "use client";

// import { useTransition } from "react";
// import Image from "next/image";
// import { deleteTimeBlock } from "@/actions/professor";
// import { useRouter } from "next/navigation";
// import { useToast } from "@/hooks/use-toast";

// type DeleteButtonProps = {
//   userId: string;
//   day: string;
//   timeBlock: string;
// };

// const DeleteTimeBlock = ({ userId, day, timeBlock }: DeleteButtonProps) => {
//   const [isPending, startTransition] = useTransition();
//   const router = useRouter();
//   const { toast } = useToast();

//   const handleDelete = () => {
//     startTransition(async () => {
//       try {
//         await deleteTimeBlock(userId, day, timeBlock);
//         toast({
//           title: "Success",
//           description: "Time block deleted!",
//           variant: "default",
//         });
//         router.refresh(); // ✅ Update UI
//       } catch (error) {
//         console.log(error);
//         toast({
//           title: "Error",
//           description: "Could not delete time block.",
//           variant: "destructive",
//         });
//       }
//     });
//   };

//   return (
//     <button onClick={handleDelete} disabled={isPending}>
//       <Image
//         src={"/trash.svg"}
//         alt="delete button"
//         width={24}
//         height={24}
//         className={isPending ? "opacity-50" : ""}
//       />
//     </button>
//   );
// };

// export default DeleteTimeBlock;
