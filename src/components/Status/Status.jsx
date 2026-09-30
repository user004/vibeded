import Card from '../Card/Card'
import ItemHeader from '../ItemHeader/ItemHeader'
import Tag from '../Tag/Tag'
import Accordion from '../Accordion/Accordion'
import Title from '../Title/Title'

function Status({ item }) {
  return (
    <Card>
      <ItemHeader
        title={item.name}
        icon={<img className="size-8 object-contain" src={item.icon} alt="" />}
        tags={item.categories.map((category) => <Tag key={category} tag={category} />)}
      />

      <Accordion summary="Details">
        <div className="grid gap-2">
          <p className="font-semibold">{item.description}</p>
          <p className="whitespace-pre-line text-muted-foreground">{item.details}</p>
        </div>

        {item.sources.length > 0 && (
          <div className="grid gap-2">
            <Title title="Sources" />
            <ul className="flex list-disc flex-wrap gap-x-6 pl-5">
              {item.sources.map((source) => <li key={source}>{source}</li>)}
            </ul>
          </div>
        )}
      </Accordion>
    </Card>
  )
}

export default Status
