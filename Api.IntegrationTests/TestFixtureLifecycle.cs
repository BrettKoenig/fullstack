using NUnit.Framework;
using System;
using System.Data.Entity;

namespace Api.IntegrationTests
{
    [SetUpFixture]
    public class TestFixtureLifecycle
    {
        public TestFixtureLifecycle()
        {
            EnsureDataDirectoryConnectionStringPlaceholderIsSet();

            EnsureNoExistingDatabaseFiles();
        }

        private static void EnsureDataDirectoryConnectionStringPlaceholderIsSet()
        {
            AppDomain.CurrentDomain.SetData("DataDirectory", NUnit.Framework.TestContext.CurrentContext.TestDirectory);
        }

        private void EnsureNoExistingDatabaseFiles()
        {
            const string connectionString = "name=DefaultConnection";

            if (Database.Exists(connectionString))
            {
                //Database.Delete(connectionString);
            }
        }
    }
}
