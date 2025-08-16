export default function AccountTabHeader({ tabTitle } : { tabTitle: string }) {
    return (
        <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[color:var(--second-color)]"></div>
            <h2 className="text-xl font-semibold text-gray-800">{tabTitle}</h2>
        </div>
    )
}