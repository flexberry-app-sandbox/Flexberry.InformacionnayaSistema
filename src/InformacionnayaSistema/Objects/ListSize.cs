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
    /// List size.
    /// </summary>
    // *** Start programmer edit section *** (ListSize CustomAttributes)

    // *** End programmer edit section *** (ListSize CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ListSizeE", new string[] {
            "Name as \'Наименование\'",
            "Size as \'Размер компании\'",
            "Size.Name as \'Name\'"}, Hidden=new string[] {
            "Name",
            "Size.Name"})]
    [MasterViewDefineAttribute("ListSizeE", "Size", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Name")]
    public class ListSize : ICSSoft.STORMNET.DataObject
    {
        
        private string fName;
        
        private IIS.InformacionnayaSistema.Size fSize;
        
        private IIS.InformacionnayaSistema.Support fSupport;
        
        // *** Start programmer edit section *** (ListSize CustomMembers)

        // *** End programmer edit section *** (ListSize CustomMembers)

        
        /// <summary>
        /// Name.
        /// </summary>
        // *** Start programmer edit section *** (ListSize.Name CustomAttributes)

        // *** End programmer edit section *** (ListSize.Name CustomAttributes)
        [StrLen(255)]
        public virtual string Name
        {
            get
            {
                // *** Start programmer edit section *** (ListSize.Name Get start)

                // *** End programmer edit section *** (ListSize.Name Get start)
                string result = this.fName;
                // *** Start programmer edit section *** (ListSize.Name Get end)

                // *** End programmer edit section *** (ListSize.Name Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ListSize.Name Set start)

                // *** End programmer edit section *** (ListSize.Name Set start)
                this.fName = value;
                // *** Start programmer edit section *** (ListSize.Name Set end)

                // *** End programmer edit section *** (ListSize.Name Set end)
            }
        }
        
        /// <summary>
        /// List size.
        /// </summary>
        // *** Start programmer edit section *** (ListSize.Size CustomAttributes)

        // *** End programmer edit section *** (ListSize.Size CustomAttributes)
        [NotNull()]
        public virtual IIS.InformacionnayaSistema.Size Size
        {
            get
            {
                // *** Start programmer edit section *** (ListSize.Size Get start)

                // *** End programmer edit section *** (ListSize.Size Get start)
                IIS.InformacionnayaSistema.Size result = this.fSize;
                // *** Start programmer edit section *** (ListSize.Size Get end)

                // *** End programmer edit section *** (ListSize.Size Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ListSize.Size Set start)

                // *** End programmer edit section *** (ListSize.Size Set start)
                this.fSize = value;
                // *** Start programmer edit section *** (ListSize.Size Set end)

                // *** End programmer edit section *** (ListSize.Size Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.InformacionnayaSistema.Support.
        /// </summary>
        // *** Start programmer edit section *** (ListSize.Support CustomAttributes)

        // *** End programmer edit section *** (ListSize.Support CustomAttributes)
        [Agregator()]
        [NotNull()]
        public virtual IIS.InformacionnayaSistema.Support Support
        {
            get
            {
                // *** Start programmer edit section *** (ListSize.Support Get start)

                // *** End programmer edit section *** (ListSize.Support Get start)
                IIS.InformacionnayaSistema.Support result = this.fSupport;
                // *** Start programmer edit section *** (ListSize.Support Get end)

                // *** End programmer edit section *** (ListSize.Support Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ListSize.Support Set start)

                // *** End programmer edit section *** (ListSize.Support Set start)
                this.fSupport = value;
                // *** Start programmer edit section *** (ListSize.Support Set end)

                // *** End programmer edit section *** (ListSize.Support Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ListSizeE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ListSizeE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ListSizeE", typeof(IIS.InformacionnayaSistema.ListSize));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ListSize.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfListSize CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfListSize CustomAttributes)
    public class DetailArrayOfListSize : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.InformacionnayaSistema.DetailArrayOfListSize members)

        // *** End programmer edit section *** (IIS.InformacionnayaSistema.DetailArrayOfListSize members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ListSize by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ListSize.
        /// </summary>
        public DetailArrayOfListSize(IIS.InformacionnayaSistema.Support fSupport) : 
                base(typeof(ListSize), ((ICSSoft.STORMNET.DataObject)(fSupport)))
        {
        }
        
        public IIS.InformacionnayaSistema.ListSize this[int index]
        {
            get
            {
                return ((IIS.InformacionnayaSistema.ListSize)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.InformacionnayaSistema.ListSize dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}