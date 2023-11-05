import { useEffect, useState } from "react";

function Attendance({
  attendanceList,
  setAttendanceList,
  isNotSearchResult,
  isNotFilterResult,
}) {
  // Erasing and Restoring attendance
  const handleEraseToggle = (index) => {
    const updatedList = [...attendanceList];
    updatedList[index].erase = !updatedList[index].erase;
    setAttendanceList(updatedList);
    localStorage.setItem("attendances", JSON.stringify(attendanceList));
  };
  return (
    <>
      {attendanceList.map((attendance, index) => (
        <div
          key={index}
          className={`attendance-list${
            attendance.erase
              ? ` erase${
                  isNotSearchResult?.includes(index) ||
                  isNotFilterResult?.includes(index)
                    ? " not-displayed"
                    : ""
                }`
              : `${
                  isNotSearchResult?.includes(index) ||
                  isNotFilterResult?.includes(index)
                    ? " not-displayed"
                    : ""
                }`
          }`}
        >
          <div className="attendance">
            <h3>{attendance.name}</h3>
            <p>{attendance.class}</p>
            <p className="date-time">{attendance.entryTime}</p>
          </div>
          <div
            onClick={() => handleEraseToggle(index)}
            className={
              !attendance.erase
                ? "remove-restore"
                : "remove-restore restore-btn"
            }
          >
            <span className="material-symbols-outlined icon">
              {!attendance.erase
                ? "format_ink_highlighter"
                : "settings_backup_restore "}
              <span className="tooltiptext">
                {!attendance.erase ? "Erase name" : "Restore name"}
              </span>
            </span>
          </div>
        </div>
      ))}
    </>
  );
}

export default Attendance;
