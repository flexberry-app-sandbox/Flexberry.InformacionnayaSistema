﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.InformacionnayaSistema
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Support.
    /// </summary>
    // *** Start programmer edit section *** (Support CustomAttributes)

    // *** End programmer edit section *** (Support CustomAttributes)
    [AutoAltered()]
    [Caption("Мера поддержки")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("SupportE", new string[] {
            "Name as \'Наименование\'",
            "Description as \'Описание\'",
            "Link as \'Ссылка на сайт\'",
            "Form as \'Форма\'",
            "Form.Name as \'Name\'"}, Hidden=new string[] {
            "Form.Name"})]
    [AssociatedDetailViewAttribute("SupportE", "ListSize", "ListSizeE", true, "", "Условие 1: Размер компании", true, new string[] {
            ""})]
    [AssociatedDetailViewAttribute("SupportE", "ListInvestment", "ListInvestmentE", true, "", "Условие 2: Инвестиции", true, new string[] {
            ""})]
    [AssociatedDetailViewAttribute("SupportE", "ListSubindustry", "ListSubindustryE", true, "", "Условие 3: Подотрасль", true, new string[] {
            ""})]
    [AssociatedDetailViewAttribute("SupportE", "ListComponent", "ListComponentE", true, "", "Условие 4: Соц.составляющая", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("SupportE", "Form", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Name")]
    [View("SupportL", new string[] {
            "Name as \'Наименование\'",
            "Description as \'Описание\'",
            "Link as \'Ссылка на сайт\'",
            "Form.Name as \'Форма\'"})]
    public class Support : ICSSoft.STORMNET.DataObject
    {
        
        private string fName;
        
        private string fDescription;
        
        private string fLink;
        
        private IIS.InformacionnayaSistema.Form fForm;
        
        private IIS.InformacionnayaSistema.DetailArrayOfListComponent fListComponent;
        
        private IIS.InformacionnayaSistema.DetailArrayOfListInvestment fListInvestment;
        
        private IIS.InformacionnayaSistema.DetailArrayOfListSize fListSize;
        
        private IIS.InformacionnayaSistema.DetailArrayOfListSubindustry fListSubindustry;
        
        // *** Start programmer edit section *** (Support CustomMembers)

        // *** End programmer edit section *** (Support CustomMembers)

        
        /// <summary>
        /// Name.
        /// </summary>
        // *** Start programmer edit section *** (Support.Name CustomAttributes)

        // *** End programmer edit section *** (Support.Name CustomAttributes)
        [StrLen(255)]
        public virtual string Name
        {
            get
            {
                // *** Start programmer edit section *** (Support.Name Get start)

                // *** End programmer edit section *** (Support.Name Get start)
                string result = this.fName;
                // *** Start programmer edit section *** (Support.Name Get end)

                // *** End programmer edit section *** (Support.Name Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Support.Name Set start)

                // *** End programmer edit section *** (Support.Name Set start)
                this.fName = value;
                // *** Start programmer edit section *** (Support.Name Set end)

                // *** End programmer edit section *** (Support.Name Set end)
            }
        }
        
        /// <summary>
        /// Description.
        /// </summary>
        // *** Start programmer edit section *** (Support.Description CustomAttributes)

        // *** End programmer edit section *** (Support.Description CustomAttributes)
        [StrLen(255)]
        public virtual string Description
        {
            get
            {
                // *** Start programmer edit section *** (Support.Description Get start)

                // *** End programmer edit section *** (Support.Description Get start)
                string result = this.fDescription;
                // *** Start programmer edit section *** (Support.Description Get end)

                // *** End programmer edit section *** (Support.Description Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Support.Description Set start)

                // *** End programmer edit section *** (Support.Description Set start)
                this.fDescription = value;
                // *** Start programmer edit section *** (Support.Description Set end)

                // *** End programmer edit section *** (Support.Description Set end)
            }
        }
        
        /// <summary>
        /// Link.
        /// </summary>
        // *** Start programmer edit section *** (Support.Link CustomAttributes)

        // *** End programmer edit section *** (Support.Link CustomAttributes)
        [StrLen(255)]
        public virtual string Link
        {
            get
            {
                // *** Start programmer edit section *** (Support.Link Get start)

                // *** End programmer edit section *** (Support.Link Get start)
                string result = this.fLink;
                // *** Start programmer edit section *** (Support.Link Get end)

                // *** End programmer edit section *** (Support.Link Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Support.Link Set start)

                // *** End programmer edit section *** (Support.Link Set start)
                this.fLink = value;
                // *** Start programmer edit section *** (Support.Link Set end)

                // *** End programmer edit section *** (Support.Link Set end)
            }
        }
        
        /// <summary>
        /// Support.
        /// </summary>
        // *** Start programmer edit section *** (Support.Form CustomAttributes)

        // *** End programmer edit section *** (Support.Form CustomAttributes)
        [NotNull()]
        public virtual IIS.InformacionnayaSistema.Form Form
        {
            get
            {
                // *** Start programmer edit section *** (Support.Form Get start)

                // *** End programmer edit section *** (Support.Form Get start)
                IIS.InformacionnayaSistema.Form result = this.fForm;
                // *** Start programmer edit section *** (Support.Form Get end)

                // *** End programmer edit section *** (Support.Form Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Support.Form Set start)

                // *** End programmer edit section *** (Support.Form Set start)
                this.fForm = value;
                // *** Start programmer edit section *** (Support.Form Set end)

                // *** End programmer edit section *** (Support.Form Set end)
            }
        }
        
        /// <summary>
        /// Support.
        /// </summary>
        // *** Start programmer edit section *** (Support.ListComponent CustomAttributes)

        // *** End programmer edit section *** (Support.ListComponent CustomAttributes)
        public virtual IIS.InformacionnayaSistema.DetailArrayOfListComponent ListComponent
        {
            get
            {
                // *** Start programmer edit section *** (Support.ListComponent Get start)

                // *** End programmer edit section *** (Support.ListComponent Get start)
                if ((this.fListComponent == null))
                {
                    this.fListComponent = new IIS.InformacionnayaSistema.DetailArrayOfListComponent(this);
                }
                IIS.InformacionnayaSistema.DetailArrayOfListComponent result = this.fListComponent;
                // *** Start programmer edit section *** (Support.ListComponent Get end)

                // *** End programmer edit section *** (Support.ListComponent Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Support.ListComponent Set start)

                // *** End programmer edit section *** (Support.ListComponent Set start)
                this.fListComponent = value;
                // *** Start programmer edit section *** (Support.ListComponent Set end)

                // *** End programmer edit section *** (Support.ListComponent Set end)
            }
        }
        
        /// <summary>
        /// Support.
        /// </summary>
        // *** Start programmer edit section *** (Support.ListInvestment CustomAttributes)

        // *** End programmer edit section *** (Support.ListInvestment CustomAttributes)
        public virtual IIS.InformacionnayaSistema.DetailArrayOfListInvestment ListInvestment
        {
            get
            {
                // *** Start programmer edit section *** (Support.ListInvestment Get start)

                // *** End programmer edit section *** (Support.ListInvestment Get start)
                if ((this.fListInvestment == null))
                {
                    this.fListInvestment = new IIS.InformacionnayaSistema.DetailArrayOfListInvestment(this);
                }
                IIS.InformacionnayaSistema.DetailArrayOfListInvestment result = this.fListInvestment;
                // *** Start programmer edit section *** (Support.ListInvestment Get end)

                // *** End programmer edit section *** (Support.ListInvestment Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Support.ListInvestment Set start)

                // *** End programmer edit section *** (Support.ListInvestment Set start)
                this.fListInvestment = value;
                // *** Start programmer edit section *** (Support.ListInvestment Set end)

                // *** End programmer edit section *** (Support.ListInvestment Set end)
            }
        }
        
        /// <summary>
        /// Support.
        /// </summary>
        // *** Start programmer edit section *** (Support.ListSize CustomAttributes)

        // *** End programmer edit section *** (Support.ListSize CustomAttributes)
        public virtual IIS.InformacionnayaSistema.DetailArrayOfListSize ListSize
        {
            get
            {
                // *** Start programmer edit section *** (Support.ListSize Get start)

                // *** End programmer edit section *** (Support.ListSize Get start)
                if ((this.fListSize == null))
                {
                    this.fListSize = new IIS.InformacionnayaSistema.DetailArrayOfListSize(this);
                }
                IIS.InformacionnayaSistema.DetailArrayOfListSize result = this.fListSize;
                // *** Start programmer edit section *** (Support.ListSize Get end)

                // *** End programmer edit section *** (Support.ListSize Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Support.ListSize Set start)

                // *** End programmer edit section *** (Support.ListSize Set start)
                this.fListSize = value;
                // *** Start programmer edit section *** (Support.ListSize Set end)

                // *** End programmer edit section *** (Support.ListSize Set end)
            }
        }
        
        /// <summary>
        /// Support.
        /// </summary>
        // *** Start programmer edit section *** (Support.ListSubindustry CustomAttributes)

        // *** End programmer edit section *** (Support.ListSubindustry CustomAttributes)
        public virtual IIS.InformacionnayaSistema.DetailArrayOfListSubindustry ListSubindustry
        {
            get
            {
                // *** Start programmer edit section *** (Support.ListSubindustry Get start)

                // *** End programmer edit section *** (Support.ListSubindustry Get start)
                if ((this.fListSubindustry == null))
                {
                    this.fListSubindustry = new IIS.InformacionnayaSistema.DetailArrayOfListSubindustry(this);
                }
                IIS.InformacionnayaSistema.DetailArrayOfListSubindustry result = this.fListSubindustry;
                // *** Start programmer edit section *** (Support.ListSubindustry Get end)

                // *** End programmer edit section *** (Support.ListSubindustry Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Support.ListSubindustry Set start)

                // *** End programmer edit section *** (Support.ListSubindustry Set start)
                this.fListSubindustry = value;
                // *** Start programmer edit section *** (Support.ListSubindustry Set end)

                // *** End programmer edit section *** (Support.ListSubindustry Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "SupportE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View SupportE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("SupportE", typeof(IIS.InformacionnayaSistema.Support));
                }
            }
            
            /// <summary>
            /// "SupportL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View SupportL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("SupportL", typeof(IIS.InformacionnayaSistema.Support));
                }
            }
        }
    }
}
