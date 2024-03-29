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
    /// List subindustry.
    /// </summary>
    // *** Start programmer edit section *** (ListSubindustry CustomAttributes)

    // *** End programmer edit section *** (ListSubindustry CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ListSubindustryE", new string[] {
            "Name as \'Наименование\'",
            "Subindustry as \'Подотрасль\'",
            "Subindustry.Name as \'Name\'"}, Hidden=new string[] {
            "Name",
            "Subindustry.Name"})]
    [MasterViewDefineAttribute("ListSubindustryE", "Subindustry", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Name")]
    public class ListSubindustry : ICSSoft.STORMNET.DataObject
    {
        
        private string fName;
        
        private IIS.Informacionnaya_sistema.Subindustry fSubindustry;
        
        private IIS.Informacionnaya_sistema.Support fSupport;
        
        // *** Start programmer edit section *** (ListSubindustry CustomMembers)

        // *** End programmer edit section *** (ListSubindustry CustomMembers)

        
        /// <summary>
        /// Name.
        /// </summary>
        // *** Start programmer edit section *** (ListSubindustry.Name CustomAttributes)

        // *** End programmer edit section *** (ListSubindustry.Name CustomAttributes)
        [StrLen(255)]
        public virtual string Name
        {
            get
            {
                // *** Start programmer edit section *** (ListSubindustry.Name Get start)

                // *** End programmer edit section *** (ListSubindustry.Name Get start)
                string result = this.fName;
                // *** Start programmer edit section *** (ListSubindustry.Name Get end)

                // *** End programmer edit section *** (ListSubindustry.Name Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ListSubindustry.Name Set start)

                // *** End programmer edit section *** (ListSubindustry.Name Set start)
                this.fName = value;
                // *** Start programmer edit section *** (ListSubindustry.Name Set end)

                // *** End programmer edit section *** (ListSubindustry.Name Set end)
            }
        }
        
        /// <summary>
        /// List subindustry.
        /// </summary>
        // *** Start programmer edit section *** (ListSubindustry.Subindustry CustomAttributes)

        // *** End programmer edit section *** (ListSubindustry.Subindustry CustomAttributes)
        [NotNull()]
        public virtual IIS.Informacionnaya_sistema.Subindustry Subindustry
        {
            get
            {
                // *** Start programmer edit section *** (ListSubindustry.Subindustry Get start)

                // *** End programmer edit section *** (ListSubindustry.Subindustry Get start)
                IIS.Informacionnaya_sistema.Subindustry result = this.fSubindustry;
                // *** Start programmer edit section *** (ListSubindustry.Subindustry Get end)

                // *** End programmer edit section *** (ListSubindustry.Subindustry Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ListSubindustry.Subindustry Set start)

                // *** End programmer edit section *** (ListSubindustry.Subindustry Set start)
                this.fSubindustry = value;
                // *** Start programmer edit section *** (ListSubindustry.Subindustry Set end)

                // *** End programmer edit section *** (ListSubindustry.Subindustry Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Informacionnaya_sistema.Support.
        /// </summary>
        // *** Start programmer edit section *** (ListSubindustry.Support CustomAttributes)

        // *** End programmer edit section *** (ListSubindustry.Support CustomAttributes)
        [Agregator()]
        [NotNull()]
        public virtual IIS.Informacionnaya_sistema.Support Support
        {
            get
            {
                // *** Start programmer edit section *** (ListSubindustry.Support Get start)

                // *** End programmer edit section *** (ListSubindustry.Support Get start)
                IIS.Informacionnaya_sistema.Support result = this.fSupport;
                // *** Start programmer edit section *** (ListSubindustry.Support Get end)

                // *** End programmer edit section *** (ListSubindustry.Support Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ListSubindustry.Support Set start)

                // *** End programmer edit section *** (ListSubindustry.Support Set start)
                this.fSupport = value;
                // *** Start programmer edit section *** (ListSubindustry.Support Set end)

                // *** End programmer edit section *** (ListSubindustry.Support Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ListSubindustryE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ListSubindustryE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ListSubindustryE", typeof(IIS.Informacionnaya_sistema.ListSubindustry));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ListSubindustry.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfListSubindustry CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfListSubindustry CustomAttributes)
    public class DetailArrayOfListSubindustry : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Informacionnaya_sistema.DetailArrayOfListSubindustry members)

        // *** End programmer edit section *** (IIS.Informacionnaya_sistema.DetailArrayOfListSubindustry members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ListSubindustry by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ListSubindustry.
        /// </summary>
        public DetailArrayOfListSubindustry(IIS.Informacionnaya_sistema.Support fSupport) : 
                base(typeof(ListSubindustry), ((ICSSoft.STORMNET.DataObject)(fSupport)))
        {
        }
        
        public IIS.Informacionnaya_sistema.ListSubindustry this[int index]
        {
            get
            {
                return ((IIS.Informacionnaya_sistema.ListSubindustry)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Informacionnaya_sistema.ListSubindustry dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
