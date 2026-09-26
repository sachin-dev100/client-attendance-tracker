

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { dateFormatter } from "@/utils/helper"

const AttendenceList = (props) => {
    const { attendenceRecordList } = props
    const noAttendence = attendenceRecordList.length === 0
    const sortedAttendence = attendenceRecordList.sort((a, b) => a.date.localeCompare(b.date))
    return (
        <main>
            <h1 className="text-xl mt-7 mb-4 font-heading text-white font-semibold"> Attendence List</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-70 text-base">Date</TableHead>
                        <TableHead className="text-center text-base">Status</TableHead>
                    </TableRow>
                </TableHeader>
                {noAttendence ? (
                    <p className='text-white text-right py-6 text-base'> No Attendence Record Found </p>
                ) : (
                    <TableBody>
                        {sortedAttendence.map((eachAttendence) => {
                            const { status, date } = eachAttendence
                            const formattedDate = dateFormatter(date)
                            const statusColor = status === "present" ? "text-success" : status === "absent" ? "text-danger" : "text-white"
                            return (
                                <TableRow>
                                    <TableCell className="font-medium">{formattedDate}</TableCell>
                                    <TableCell className={`text-center ${statusColor}`}>{status.toUpperCase()}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                )}

            </Table>
        </main >
    )
}

export default AttendenceList
