﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Informacionnaya_sistema
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// List investment.
    /// </summary>
    // *** Start programmer edit section *** (ListInvestment CustomAttributes)

    // *** End programmer edit section *** (ListInvestment CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ListInvestmentE", new string[] {
            "Name as \'Наименование\'",
            "Investment as \'Инвестиции\'",
            "Investment.Name as \'Name\'"}, Hidden=new string[] {
            "Name",
            "Investment.Name"})]
    [MasterViewDefineAttribute("ListInvestmentE", "Investment", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Name")]
    public class ListInvestment : ICSSoft.STORMNET.DataObject
    {
        
        private string fName;
        
        private IIS.Informacionnaya_sistema.Investment fInvestment;
        
        private IIS.Informacionnaya_sistema.Support fSupport;
        
        // *** Start programmer edit section *** (ListInvestment CustomMembers)

        // *** End programmer edit section *** (ListInvestment CustomMembers)

        
        /// <summary>
        /// Name.
        /// </summary>
        // *** Start programmer edit section *** (ListInvestment.Name CustomAttributes)

        // *** End programmer edit section *** (ListInvestment.Name CustomAttributes)
        [StrLen(255)]
        public virtual string Name
        {
            get
            {
                // *** Start programmer edit section *** (ListInvestment.Name Get start)

                // *** End programmer edit section *** (ListInvestment.Name Get start)
                string result = this.fName;
                // *** Start programmer edit section *** (ListInvestment.Name Get end)

                // *** End programmer edit section *** (ListInvestment.Name Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ListInvestment.Name Set start)

                // *** End programmer edit section *** (ListInvestment.Name Set start)
                this.fName = value;
                // *** Start programmer edit section *** (ListInvestment.Name Set end)

                // *** End programmer edit section *** (ListInvestment.Name Set end)
            }
        }
        
        /// <summary>
        /// List investment.
        /// </summary>
        // *** Start programmer edit section *** (ListInvestment.Investment CustomAttributes)

        // *** End programmer edit section *** (ListInvestment.Investment CustomAttributes)
        [NotNull()]
        public virtual IIS.Informacionnaya_sistema.Investment Investment
        {
            get
            {
                // *** Start programmer edit section *** (ListInvestment.Investment Get start)

                // *** End programmer edit section *** (ListInvestment.Investment Get start)
                IIS.Informacionnaya_sistema.Investment result = this.fInvestment;
                // *** Start programmer edit section *** (ListInvestment.Investment Get end)

                // *** End programmer edit section *** (ListInvestment.Investment Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ListInvestment.Investment Set start)

                // *** End programmer edit section *** (ListInvestment.Investment Set start)
                this.fInvestment = value;
                // *** Start programmer edit section *** (ListInvestment.Investment Set end)

                // *** End programmer edit section *** (ListInvestment.Investment Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Informacionnaya_sistema.Support.
        /// </summary>
        // *** Start programmer edit section *** (ListInvestment.Support CustomAttributes)

        // *** End programmer edit section *** (ListInvestment.Support CustomAttributes)
        [Agregator()]
        [NotNull()]
        public virtual IIS.Informacionnaya_sistema.Support Support
        {
            get
            {
                // *** Start programmer edit section *** (ListInvestment.Support Get start)

                // *** End programmer edit section *** (ListInvestment.Support Get start)
                IIS.Informacionnaya_sistema.Support result = this.fSupport;
                // *** Start programmer edit section *** (ListInvestment.Support Get end)

                // *** End programmer edit section *** (ListInvestment.Support Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ListInvestment.Support Set start)

                // *** End programmer edit section *** (ListInvestment.Support Set start)
                this.fSupport = value;
                // *** Start programmer edit section *** (ListInvestment.Support Set end)

                // *** End programmer edit section *** (ListInvestment.Support Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ListInvestmentE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ListInvestmentE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ListInvestmentE", typeof(IIS.Informacionnaya_sistema.ListInvestment));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ListInvestment.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfListInvestment CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfListInvestment CustomAttributes)
    public class DetailArrayOfListInvestment : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Informacionnaya_sistema.DetailArrayOfListInvestment members)

        // *** End programmer edit section *** (IIS.Informacionnaya_sistema.DetailArrayOfListInvestment members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ListInvestment by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ListInvestment.
        /// </summary>
        public DetailArrayOfListInvestment(IIS.Informacionnaya_sistema.Support fSupport) : 
                base(typeof(ListInvestment), ((ICSSoft.STORMNET.DataObject)(fSupport)))
        {
        }
        
        public IIS.Informacionnaya_sistema.ListInvestment this[int index]
        {
            get
            {
                return ((IIS.Informacionnaya_sistema.ListInvestment)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Informacionnaya_sistema.ListInvestment dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}