import { CWidgetStatsC } from "@coreui/react";
import { useContext } from "react";
import { WidgetContext } from "../../pages/Admin/Admin";


function CWidget ({value,text,title,icon,id}){
    const {onWidgetClick,show}=useContext(WidgetContext)


return (
    <div className="col">
    <CWidgetStatsC
    onClick={()=>onWidgetClick(id)}
    style={{cursor:"pointer"}}
    icon={icon}
    color={show[id] ? "info" : "warning"}
    progress={{value}}
    text={text}
    title={title}
    value={value}
    />
</div>
)

}

export default CWidget;