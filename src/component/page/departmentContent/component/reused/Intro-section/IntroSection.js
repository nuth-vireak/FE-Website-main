import React from 'react';
import
{
    IntroSectionHeaderStyle,
    IntroSectionDescriptionStyle,
    IntroSectionSubTitle,
    IntroSectionLayoutStyle
} from "component/page/departmentContent/component/reused/Intro-section/introStyled.Styled";

export default function IntroSection({title,description,subtitle,imgUrl,ColorTheme})
{
    return (
        <IntroSectionLayoutStyle
            ColorTheme={ColorTheme}
            imgUrl={require(`assets/${imgUrl}`).default}>
            <div className={"wrapper-flex-right"}>

                <IntroSectionHeaderStyle ColorTheme={ColorTheme}>
                    {title}
                </IntroSectionHeaderStyle>

                <IntroSectionSubTitle departmentTheme={ColorTheme.mainColor}>
                    {subtitle}
                </IntroSectionSubTitle>

                <IntroSectionDescriptionStyle>
                    {description}
                </IntroSectionDescriptionStyle>
            </div>

        </IntroSectionLayoutStyle>
    );
}
IntroSection.defaultProps =
    {
        ColorTheme:
            {
                textColor:"white",
                mainColor:"#014164",
                linearColor:"#014164"
            }
    }



