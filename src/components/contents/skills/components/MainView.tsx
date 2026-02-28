import React, { FC } from 'react';
import Description from '../../../shared/Description';
import SkillsIcon from '../../../../assets/icons/dock/skills.png';
import GroupButtons from '../../../shared/GroupButtons';
import ReactIcon from '../../../../assets/icons/react.png';
import HtmlIcon from '../../../../assets/icons/html.png';
import CssIcon from '../../../../assets/icons/css.png';
import JsIcon from '../../../../assets/icons/js.png';
import TsIcon from '../../../../assets/icons/ts.png';
import ReduxIcon from '../../../../assets/icons/redux.svg';
import MuiIcon from '../../../../assets/icons/mui.png';
import AxiosIcon from '../../../../assets/icons/axios.png';
import ChartJsIcon from '../../../../assets/icons/chartjs.png';
import I18nIcon from '../../../../assets/icons/i18n.png';
import GitIcon from '../../../../assets/icons/git.png';
import Wrapper from '../../../shared/Wrapper';
import {Skill, SkillKey} from "../../../../constants/skills";

type TypeProps = {
  onClick?: (view: string) => void;
}

const MainView: FC<TypeProps> = ({ onClick }) => {
  return (
    <Wrapper>
      <Description title={'Skills'} icon={SkillsIcon}>
        Skills, in general, refer to a person's ability to perform specific tasks, actions, or activities effectively and efficiently. They encompass a wide range of competencies acquired through learning, training, and experience.
      </Description>
      <GroupButtons
        title={'Frameworks'}
        links={[
          {name: Skill.React, icon: ReactIcon, bg: '#000000', key: SkillKey.React },
        ]}
        onClick={onClick}
      />
      <GroupButtons
        title={'Programming languages'}
        links={[
          { name: Skill.HTML, icon: HtmlIcon, key: SkillKey.HTML },
          { name: Skill.CSS, icon: CssIcon, key: SkillKey.CSS },
          { name: Skill.JavaScript, icon: JsIcon, key: SkillKey.JavaScript },
          { name: Skill.TypeScript, icon: TsIcon, key: SkillKey.TypeScript },
        ]}
        onClick={onClick}
      />

      <GroupButtons
        title={'Libraries'}
        links={[
          { name: Skill.Redux, icon: ReduxIcon, key: SkillKey.Redux },
          { name: Skill.MUI, icon: MuiIcon, key: SkillKey.MUI },
          { name: Skill.Axios, icon: AxiosIcon, key: SkillKey.Axios },
          { name: Skill.ChartJS, icon: ChartJsIcon, key: SkillKey.ChartJS },
          { name: 'i18n', icon: I18nIcon, key: SkillKey.i18n },
        ]}
        onClick={onClick}
      />

      <GroupButtons
        title={'Tools'}
        links={[
          {name: 'Git', icon: GitIcon, key: SkillKey.GIT },
        ]}
        onClick={onClick}
      />
    </Wrapper>
  );
};

export default MainView;