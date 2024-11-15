"use client";

import { getAttendees } from "@/lib/events/utils";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, User, GraduationCap } from "lucide-react";

type Attendee = {
  name: string;
  semester: string;
};

export default function AttendeesList({
  currentEvent,
}: {
  currentEvent: string;
}) {
  const [attendees, setAttendees] = useState<Attendee[]>([]);
  const [filteredAttendees, setFilteredAttendees] = useState<Attendee[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchAttendees = async () => {
      const data = await getAttendees(currentEvent);
      setAttendees(data);
      setFilteredAttendees(data);
    };

    fetchAttendees();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = attendees.filter(
      (attendee) =>
        attendee.name.toLowerCase().includes(term) ||
        attendee.semester.toLowerCase().includes(term)
    );

    setFilteredAttendees(filtered);
  };

  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-medium capitalize">Attendees List</h1>
      <Card className="w-full border-none p-0 m-0">
        <CardContent className="m-0 p-0">
          <div className="relative my-4">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <Input
              type="text"
              placeholder="Search attendees..."
              value={searchTerm}
              onChange={handleSearch}
              className="pl-10 w-full"
            />
          </div>
          <ScrollArea className="h-[300px] rounded-md border p-4">
            {filteredAttendees.length > 0 ? (
              filteredAttendees.map((attendee, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 py-2 border-b last:border-b-0"
                >
                  <User className="text-gray-400" size={20} />
                  <div>
                    <p className="font-semibold">{attendee.name}</p>
                    <p className="text-sm text-gray-500 flex items-center">
                      <GraduationCap className="mr-1" size={14} />
                      {attendee.semester}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-4">
                No attendees found.
              </p>
            )}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
