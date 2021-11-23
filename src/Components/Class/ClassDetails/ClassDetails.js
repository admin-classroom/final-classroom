import React from "react"

import StreamTabPanel from "./StreamTabPanel/StreamTabPanel"
import { tabsContext } from "../../../context/TabsContext"
import PeopleTabPanel from "./PeopleTabPanel/PeopleTabPanel"

export default function ClassDetails() {
  const { value } = React.useContext(tabsContext)
  const role = "creator"

  return (
    <>
      <StreamTabPanel value={value} index={0} role={role} />
      <PeopleTabPanel value={value} index={2} role={role} />
    </>
  )
}
