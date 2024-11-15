import { BASE_URL } from "../utils";

export async function getMeetings() {
  const response = await fetch(`${BASE_URL}/meeting-api/get-url`);
  if (!response.ok) {
    throw new Error("Failed to fetch meetings");
  }
  return response.json();
}

export const startInstantMeeting = async () => {
  // Generate a room name and the moderator URL
  const roomName = "Room" + Math.random().toString(36).substring(2, 7);
  const moderatorURL = `https://meet.jit.si/${roomName}#config.prejoinPageEnabled=false&userInfo.displayName=Moderator`;

  // Open the meeting in a new tab
  window.open(moderatorURL, "_blank");

  // Send the URL to the API
  try {
    const response = await fetch(`${BASE_URL}/meeting-api/set_url`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: moderatorURL }), // Send the generated URL
    });

    if (response.ok) {
      console.log("Meeting URL updated successfully");
    } else {
      console.error("Failed to update meeting URL", response.statusText);
    }
  } catch (error) {
    console.error("Error while updating meeting URL", error);
  }
};
