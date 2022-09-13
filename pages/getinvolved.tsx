interface IParagraph {
    paragraph: string
}

interface IHelpPossibility {
  step_number: number
  description: string
  link: string
}

interface ILookedFor {
  image: string
  title: string
  description: IParagraph[]
  image_description: string
}

interface IGetInvolvedData {
    hero_image: string
    image_description: string
    page_title: string
    cta_button: string
    cta_link: string
    main_subtitle: string
    paragraphs_group : IParagraph[]
    image_1: string
    image_1_description: string
    description_1: string
    help_possibilities: IHelpPossibility[]
    headline_2: string
    description_2_list: IParagraph[]
    headline_3: string
    list_of_items: IParagraph[]
    image_3: string
    image_3_description: string
    description_4: string
    list_of_looked_for: ILookedFor[]
}

interface Props  {
    getInvolvedData: IGetInvolvedData;
  };

export const GetInvolved = ({getInvolvedData}: Props) => {
    return <div>

        Get Involved!
    </div>
}

export default GetInvolved