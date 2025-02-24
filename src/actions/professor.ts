// "use server";

// import { revalidatePath } from "next/cache";

// export const deleteTimeBlock = async (
//   userId: string,
//   day: string,
//   timeBlock: string,
// ) => {
//   try {
//     const res = await fetch("/api/professor/schedule", {
//       method: "DELETE",
//       body: JSON.stringify({ userId, day, timeBlock }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (!res.ok) throw new Error("Failed to delete");

//     const data = await res.json();

//     revalidatePath("/profile"); // ✅ Revalidate to update UI
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };
