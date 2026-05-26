import PluginDetails from "@views/Plugins/Details"

export default function PluginDetailPage({
    params,
}: {
    params: { name: string }
}) {
    return <PluginDetails params={params} />
}
